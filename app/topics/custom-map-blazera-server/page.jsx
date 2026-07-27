import CustomMapBlazeraServerKeywordPage, { generateMetadata } from './custom-map-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapBlazeraServerKeywordPage />;
}
