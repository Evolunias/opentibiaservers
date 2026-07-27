import NewTibianusWebsiteKeywordPage, { generateMetadata } from './new-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusWebsiteKeywordPage />;
}
