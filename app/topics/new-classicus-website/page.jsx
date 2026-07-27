import NewClassicusWebsiteKeywordPage, { generateMetadata } from './new-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusWebsiteKeywordPage />;
}
