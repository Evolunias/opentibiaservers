import CustomMapSeasonFranceKeywordPage, { generateMetadata } from './custom-map-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonFranceKeywordPage />;
}
