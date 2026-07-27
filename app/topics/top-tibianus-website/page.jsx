import TopTibianusWebsiteKeywordPage, { generateMetadata } from './top-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusWebsiteKeywordPage />;
}
