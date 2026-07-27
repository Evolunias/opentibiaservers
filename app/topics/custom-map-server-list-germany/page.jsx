import CustomMapServerListGermanyKeywordPage, { generateMetadata } from './custom-map-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListGermanyKeywordPage />;
}
