import CustomMapSeasonLatinAmericaKeywordPage, { generateMetadata } from './custom-map-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonLatinAmericaKeywordPage />;
}
