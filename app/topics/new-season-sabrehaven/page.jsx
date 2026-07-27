import NewSeasonSabrehavenKeywordPage, { generateMetadata } from './new-season-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenKeywordPage />;
}
