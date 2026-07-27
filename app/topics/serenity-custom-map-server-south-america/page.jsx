import SerenityCustomMapServerSouthAmericaKeywordPage, { generateMetadata } from './serenity-custom-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCustomMapServerSouthAmericaKeywordPage />;
}
