import NewSeasonEvoleraOpenTibiaKeywordPage, { generateMetadata } from './new-season-evolera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraOpenTibiaKeywordPage />;
}
