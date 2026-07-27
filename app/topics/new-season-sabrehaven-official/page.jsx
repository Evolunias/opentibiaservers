import NewSeasonSabrehavenOfficialKeywordPage, { generateMetadata } from './new-season-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenOfficialKeywordPage />;
}
