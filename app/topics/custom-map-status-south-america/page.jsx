import CustomMapStatusSouthAmericaKeywordPage, { generateMetadata } from './custom-map-status-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusSouthAmericaKeywordPage />;
}
