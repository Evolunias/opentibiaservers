import CustomMapDemolidoresServersKeywordPage, { generateMetadata } from './custom-map-demolidores-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDemolidoresServersKeywordPage />;
}
