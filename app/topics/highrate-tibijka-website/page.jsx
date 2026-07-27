import HighrateTibijkaWebsiteKeywordPage, { generateMetadata } from './highrate-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaWebsiteKeywordPage />;
}
