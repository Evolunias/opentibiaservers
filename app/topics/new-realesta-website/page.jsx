import NewRealestaWebsiteKeywordPage, { generateMetadata } from './new-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaWebsiteKeywordPage />;
}
