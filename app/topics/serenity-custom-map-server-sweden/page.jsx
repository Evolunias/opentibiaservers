import SerenityCustomMapServerSwedenKeywordPage, { generateMetadata } from './serenity-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCustomMapServerSwedenKeywordPage />;
}
