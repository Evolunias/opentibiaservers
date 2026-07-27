import NewUnlineWebsiteKeywordPage, { generateMetadata } from './new-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineWebsiteKeywordPage />;
}
