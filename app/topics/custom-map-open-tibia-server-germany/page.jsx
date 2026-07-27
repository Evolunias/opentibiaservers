import CustomMapOpenTibiaServerGermanyKeywordPage, { generateMetadata } from './custom-map-open-tibia-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOpenTibiaServerGermanyKeywordPage />;
}
