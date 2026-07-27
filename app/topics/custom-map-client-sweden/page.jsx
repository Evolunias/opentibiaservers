import CustomMapClientSwedenKeywordPage, { generateMetadata } from './custom-map-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientSwedenKeywordPage />;
}
