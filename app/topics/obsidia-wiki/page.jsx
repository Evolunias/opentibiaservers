import ObsidiaWikiKeywordPage, { generateMetadata } from './obsidia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ObsidiaWikiKeywordPage />;
}
