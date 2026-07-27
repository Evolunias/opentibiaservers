import TibiameRealMapKeywordPage, { generateMetadata } from './tibiame-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRealMapKeywordPage />;
}
