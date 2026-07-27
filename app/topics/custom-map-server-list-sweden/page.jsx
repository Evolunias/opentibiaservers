import CustomMapServerListSwedenKeywordPage, { generateMetadata } from './custom-map-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListSwedenKeywordPage />;
}
