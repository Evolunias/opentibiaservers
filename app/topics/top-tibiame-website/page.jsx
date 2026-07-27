import TopTibiameWebsiteKeywordPage, { generateMetadata } from './top-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameWebsiteKeywordPage />;
}
