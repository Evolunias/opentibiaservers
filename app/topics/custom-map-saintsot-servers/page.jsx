import CustomMapSaintsotServersKeywordPage, { generateMetadata } from './custom-map-saintsot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSaintsotServersKeywordPage />;
}
