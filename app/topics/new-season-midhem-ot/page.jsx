import NewSeasonMidhemOtKeywordPage, { generateMetadata } from './new-season-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemOtKeywordPage />;
}
