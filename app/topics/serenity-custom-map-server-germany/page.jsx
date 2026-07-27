import SerenityCustomMapServerGermanyKeywordPage, { generateMetadata } from './serenity-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCustomMapServerGermanyKeywordPage />;
}
