import TibiameWebsiteKeywordPage, { generateMetadata } from './tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameWebsiteKeywordPage />;
}
