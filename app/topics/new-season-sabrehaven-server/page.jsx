import NewSeasonSabrehavenServerKeywordPage, { generateMetadata } from './new-season-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenServerKeywordPage />;
}
