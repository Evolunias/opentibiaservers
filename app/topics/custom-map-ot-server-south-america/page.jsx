import CustomMapOtServerSouthAmericaKeywordPage, { generateMetadata } from './custom-map-ot-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerSouthAmericaKeywordPage />;
}
