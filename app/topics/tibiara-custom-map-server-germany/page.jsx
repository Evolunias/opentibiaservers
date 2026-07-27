import TibiaraCustomMapServerGermanyKeywordPage, { generateMetadata } from './tibiara-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraCustomMapServerGermanyKeywordPage />;
}
