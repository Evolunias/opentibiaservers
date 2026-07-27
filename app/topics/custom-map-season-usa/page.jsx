import CustomMapSeasonUsaKeywordPage, { generateMetadata } from './custom-map-season-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSeasonUsaKeywordPage />;
}
