import SerenityCustomMapServerUsaKeywordPage, { generateMetadata } from './serenity-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCustomMapServerUsaKeywordPage />;
}
