import NewBlazeraWebsiteKeywordPage, { generateMetadata } from './new-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraWebsiteKeywordPage />;
}
