import NewSeasonSabrehavenClientKeywordPage, { generateMetadata } from './new-season-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenClientKeywordPage />;
}
