import SerenityCustomMapServerArgentinaKeywordPage, { generateMetadata } from './serenity-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCustomMapServerArgentinaKeywordPage />;
}
