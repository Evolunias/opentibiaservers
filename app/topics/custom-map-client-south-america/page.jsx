import CustomMapClientSouthAmericaKeywordPage, { generateMetadata } from './custom-map-client-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientSouthAmericaKeywordPage />;
}
