import CustomMapSeasonGermanyKeywordPage, { generateMetadata } from './custom-map-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonGermanyKeywordPage />;
}
