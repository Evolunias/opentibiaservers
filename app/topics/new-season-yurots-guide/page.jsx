import NewSeasonYurotsGuideKeywordPage, { generateMetadata } from './new-season-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsGuideKeywordPage />;
}
