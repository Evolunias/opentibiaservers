import TibiameMapKeywordPage, { generateMetadata } from './tibiame-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameMapKeywordPage />;
}
