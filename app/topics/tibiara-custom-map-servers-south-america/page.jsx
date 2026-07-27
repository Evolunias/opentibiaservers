import TibiaraCustomMapServersSouthAmericaKeywordPage, { generateMetadata } from './tibiara-custom-map-servers-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraCustomMapServersSouthAmericaKeywordPage />;
}
