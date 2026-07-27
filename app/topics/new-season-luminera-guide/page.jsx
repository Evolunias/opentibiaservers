import NewSeasonLumineraGuideKeywordPage, { generateMetadata } from './new-season-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraGuideKeywordPage />;
}
