import LuceraWikiKeywordPage, { generateMetadata } from './lucera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraWikiKeywordPage />;
}
