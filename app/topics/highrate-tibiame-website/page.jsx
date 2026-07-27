import HighrateTibiameWebsiteKeywordPage, { generateMetadata } from './highrate-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameWebsiteKeywordPage />;
}
