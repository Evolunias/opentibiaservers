import UnlineWikiKeywordPage, { generateMetadata } from './unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineWikiKeywordPage />;
}
