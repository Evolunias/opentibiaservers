import CustomMapServerGermanyKeywordPage, { generateMetadata } from './custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerGermanyKeywordPage />;
}
