import CustomMapSeasonMexicoKeywordPage, { generateMetadata } from './custom-map-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonMexicoKeywordPage />;
}
