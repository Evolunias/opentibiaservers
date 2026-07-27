import NewSeasonSabrehavenWebsiteKeywordPage, { generateMetadata } from './new-season-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenWebsiteKeywordPage />;
}
