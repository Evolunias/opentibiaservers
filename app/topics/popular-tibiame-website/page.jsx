import PopularTibiameWebsiteKeywordPage, { generateMetadata } from './popular-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameWebsiteKeywordPage />;
}
