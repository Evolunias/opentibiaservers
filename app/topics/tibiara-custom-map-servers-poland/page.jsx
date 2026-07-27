import TibiaraCustomMapServersPolandKeywordPage, { generateMetadata } from './tibiara-custom-map-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraCustomMapServersPolandKeywordPage />;
}
