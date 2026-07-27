import CustomMapTibiaraServersKeywordPage, { generateMetadata } from './custom-map-tibiara-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaraServersKeywordPage />;
}
