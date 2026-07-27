import CustomMapTibiameServersKeywordPage, { generateMetadata } from './custom-map-tibiame-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiameServersKeywordPage />;
}
