import TopCanobWebsiteKeywordPage, { generateMetadata } from './top-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCanobWebsiteKeywordPage />;
}
