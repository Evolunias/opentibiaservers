import NewSeasonMidhemTibiaKeywordPage, { generateMetadata } from './new-season-midhem-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemTibiaKeywordPage />;
}
