import TopOxygenotWebsiteKeywordPage, { generateMetadata } from './top-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotWebsiteKeywordPage />;
}
