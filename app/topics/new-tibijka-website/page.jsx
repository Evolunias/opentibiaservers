import NewTibijkaWebsiteKeywordPage, { generateMetadata } from './new-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaWebsiteKeywordPage />;
}
