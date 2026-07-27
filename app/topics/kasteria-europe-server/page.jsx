import KasteriaEuropeServerKeywordPage, { generateMetadata } from './kasteria-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaEuropeServerKeywordPage />;
}
