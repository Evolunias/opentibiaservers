import CustomMapBlazeraServersKeywordPage, { generateMetadata } from './custom-map-blazera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapBlazeraServersKeywordPage />;
}
