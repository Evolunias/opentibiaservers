import NewSeasonSabrehavenLoginKeywordPage, { generateMetadata } from './new-season-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenLoginKeywordPage />;
}
