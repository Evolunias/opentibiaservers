import CustomMapClientGermanyKeywordPage, { generateMetadata } from './custom-map-client-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientGermanyKeywordPage />;
}
