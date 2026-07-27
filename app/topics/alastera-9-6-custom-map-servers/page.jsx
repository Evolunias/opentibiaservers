import Alastera96CustomMapServersKeywordPage, { generateMetadata } from './alastera-9-6-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96CustomMapServersKeywordPage />;
}
