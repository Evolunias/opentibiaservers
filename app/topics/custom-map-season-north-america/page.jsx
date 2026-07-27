import CustomMapSeasonNorthAmericaKeywordPage, { generateMetadata } from './custom-map-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonNorthAmericaKeywordPage />;
}
