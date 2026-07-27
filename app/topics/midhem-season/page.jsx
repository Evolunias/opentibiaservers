import MidhemSeasonKeywordPage, { generateMetadata } from './midhem-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSeasonKeywordPage />;
}
