import CustomMapTibijkaServersKeywordPage, { generateMetadata } from './custom-map-tibijka-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibijkaServersKeywordPage />;
}
