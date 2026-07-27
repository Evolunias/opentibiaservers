import CustomMapOpenTibiaServerEuropeKeywordPage, { generateMetadata } from './custom-map-open-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOpenTibiaServerEuropeKeywordPage />;
}
