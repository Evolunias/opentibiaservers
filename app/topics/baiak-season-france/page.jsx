import BaiakSeasonFranceKeywordPage, { generateMetadata } from './baiak-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonFranceKeywordPage />;
}
