import NewSeasonMidhemKeywordPage, { generateMetadata } from './new-season-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemKeywordPage />;
}
