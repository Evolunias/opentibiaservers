import HighrateClassicusWebsiteKeywordPage, { generateMetadata } from './highrate-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusWebsiteKeywordPage />;
}
