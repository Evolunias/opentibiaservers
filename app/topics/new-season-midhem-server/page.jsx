import NewSeasonMidhemServerKeywordPage, { generateMetadata } from './new-season-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemServerKeywordPage />;
}
