import NewSeasonYurotsLoginKeywordPage, { generateMetadata } from './new-season-yurots-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsLoginKeywordPage />;
}
