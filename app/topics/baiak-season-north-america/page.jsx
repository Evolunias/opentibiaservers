import BaiakSeasonNorthAmericaKeywordPage, { generateMetadata } from './baiak-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonNorthAmericaKeywordPage />;
}
