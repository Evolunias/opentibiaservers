import LowrateTibiameWebsiteKeywordPage, { generateMetadata } from './lowrate-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameWebsiteKeywordPage />;
}
