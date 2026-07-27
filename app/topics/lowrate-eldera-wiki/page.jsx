import LowrateElderaWikiKeywordPage, { generateMetadata } from './lowrate-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaWikiKeywordPage />;
}
