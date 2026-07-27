import CustomMapStatusSwedenKeywordPage, { generateMetadata } from './custom-map-status-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusSwedenKeywordPage />;
}
