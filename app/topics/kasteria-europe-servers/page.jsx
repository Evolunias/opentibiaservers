import KasteriaEuropeServersKeywordPage, { generateMetadata } from './kasteria-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaEuropeServersKeywordPage />;
}
