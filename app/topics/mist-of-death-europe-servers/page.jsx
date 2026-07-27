import MistOfDeathEuropeServersKeywordPage, { generateMetadata } from './mist-of-death-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathEuropeServersKeywordPage />;
}
