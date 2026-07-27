import NewSeasonMidhemOtsKeywordPage, { generateMetadata } from './new-season-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemOtsKeywordPage />;
}
