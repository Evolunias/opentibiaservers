import LowrateTibianusWikiKeywordPage, { generateMetadata } from './lowrate-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibianusWikiKeywordPage />;
}
