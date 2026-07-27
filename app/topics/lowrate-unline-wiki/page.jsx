import LowrateUnlineWikiKeywordPage, { generateMetadata } from './lowrate-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineWikiKeywordPage />;
}
