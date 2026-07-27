import CustomMapTibiameServerKeywordPage, { generateMetadata } from './custom-map-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiameServerKeywordPage />;
}
