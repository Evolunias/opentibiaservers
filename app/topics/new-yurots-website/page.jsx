import NewYurotsWebsiteKeywordPage, { generateMetadata } from './new-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsWebsiteKeywordPage />;
}
