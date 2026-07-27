import OlderaEuropeServersKeywordPage, { generateMetadata } from './oldera-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaEuropeServersKeywordPage />;
}
