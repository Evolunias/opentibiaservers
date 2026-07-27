import NewSeasonMidhemOpenTibiaKeywordPage, { generateMetadata } from './new-season-midhem-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemOpenTibiaKeywordPage />;
}
