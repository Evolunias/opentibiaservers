import NewSeasonElderaOpenTibiaKeywordPage, { generateMetadata } from './new-season-eldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonElderaOpenTibiaKeywordPage />;
}
