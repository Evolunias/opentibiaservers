import CustomMapSeasonCanadaKeywordPage, { generateMetadata } from './custom-map-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonCanadaKeywordPage />;
}
