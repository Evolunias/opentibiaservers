import SerenityCustomMapServerMexicoKeywordPage, { generateMetadata } from './serenity-custom-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCustomMapServerMexicoKeywordPage />;
}
