import PopularYurotsWebsiteKeywordPage, { generateMetadata } from './popular-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsWebsiteKeywordPage />;
}
