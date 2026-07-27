import CustomMapSaintsotServerKeywordPage, { generateMetadata } from './custom-map-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSaintsotServerKeywordPage />;
}
