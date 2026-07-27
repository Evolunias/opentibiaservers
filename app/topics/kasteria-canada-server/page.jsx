import KasteriaCanadaServerKeywordPage, { generateMetadata } from './kasteria-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaCanadaServerKeywordPage />;
}
