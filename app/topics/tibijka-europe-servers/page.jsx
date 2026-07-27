import TibijkaEuropeServersKeywordPage, { generateMetadata } from './tibijka-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEuropeServersKeywordPage />;
}
