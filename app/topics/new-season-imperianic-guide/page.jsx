import NewSeasonImperianicGuideKeywordPage, { generateMetadata } from './new-season-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicGuideKeywordPage />;
}
