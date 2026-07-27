import CustomMapSeasonPolandKeywordPage, { generateMetadata } from './custom-map-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonPolandKeywordPage />;
}
