import CarlinotWikiKeywordPage, { generateMetadata } from './carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotWikiKeywordPage />;
}
