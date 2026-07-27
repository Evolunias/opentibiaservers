import NewSeasonXanteriaGuideKeywordPage, { generateMetadata } from './new-season-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonXanteriaGuideKeywordPage />;
}
