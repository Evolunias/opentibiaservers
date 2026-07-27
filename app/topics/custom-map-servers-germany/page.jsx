import CustomMapServersGermanyKeywordPage, { generateMetadata } from './custom-map-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServersGermanyKeywordPage />;
}
