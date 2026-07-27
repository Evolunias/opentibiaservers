import CustomMapRealestaServersKeywordPage, { generateMetadata } from './custom-map-realesta-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRealestaServersKeywordPage />;
}
