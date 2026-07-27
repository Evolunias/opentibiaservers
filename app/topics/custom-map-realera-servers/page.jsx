import CustomMapRealeraServersKeywordPage, { generateMetadata } from './custom-map-realera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRealeraServersKeywordPage />;
}
