import HighrateThorniaWebsiteKeywordPage, { generateMetadata } from './highrate-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaWebsiteKeywordPage />;
}
