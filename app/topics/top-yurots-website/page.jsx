import TopYurotsWebsiteKeywordPage, { generateMetadata } from './top-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsWebsiteKeywordPage />;
}
