import MistOfDeathUsaServerKeywordPage, { generateMetadata } from './mist-of-death-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathUsaServerKeywordPage />;
}
