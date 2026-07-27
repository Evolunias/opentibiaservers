import NewSeasonLumineraOpenTibiaKeywordPage, { generateMetadata } from './new-season-luminera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraOpenTibiaKeywordPage />;
}
