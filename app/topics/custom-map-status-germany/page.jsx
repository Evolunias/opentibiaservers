import CustomMapStatusGermanyKeywordPage, { generateMetadata } from './custom-map-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusGermanyKeywordPage />;
}
