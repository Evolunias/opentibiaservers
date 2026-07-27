import PopularTibiameGuideKeywordPage, { generateMetadata } from './popular-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameGuideKeywordPage />;
}
