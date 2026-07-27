import OlderaEuropeServerKeywordPage, { generateMetadata } from './oldera-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaEuropeServerKeywordPage />;
}
