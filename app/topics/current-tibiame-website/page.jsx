import CurrentTibiameWebsiteKeywordPage, { generateMetadata } from './current-tibiame-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameWebsiteKeywordPage />;
}
