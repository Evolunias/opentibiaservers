import NewSeasonMidhemClientKeywordPage, { generateMetadata } from './new-season-midhem-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemClientKeywordPage />;
}
