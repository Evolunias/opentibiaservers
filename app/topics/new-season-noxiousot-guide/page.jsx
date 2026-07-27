import NewSeasonNoxiousotGuideKeywordPage, { generateMetadata } from './new-season-noxiousot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNoxiousotGuideKeywordPage />;
}
