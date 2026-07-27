import KasteriaCanadaServersKeywordPage, { generateMetadata } from './kasteria-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaCanadaServersKeywordPage />;
}
