import CustomMapOtServerGermanyKeywordPage, { generateMetadata } from './custom-map-ot-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerGermanyKeywordPage />;
}
