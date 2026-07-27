import MistOfDeathUsaServersKeywordPage, { generateMetadata } from './mist-of-death-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathUsaServersKeywordPage />;
}
