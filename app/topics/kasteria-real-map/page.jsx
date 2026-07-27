import KasteriaRealMapKeywordPage, { generateMetadata } from './kasteria-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapKeywordPage />;
}
