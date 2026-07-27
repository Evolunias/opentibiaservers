import MistOfDeathCanadaServersKeywordPage, { generateMetadata } from './mist-of-death-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathCanadaServersKeywordPage />;
}
