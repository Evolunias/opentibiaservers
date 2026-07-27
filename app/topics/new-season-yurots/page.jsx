import NewSeasonYurotsKeywordPage, { generateMetadata } from './new-season-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsKeywordPage />;
}
