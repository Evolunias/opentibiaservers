import TopBlazeraWebsiteKeywordPage, { generateMetadata } from './top-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraWebsiteKeywordPage />;
}
