import ElderaWikiKeywordPage, { generateMetadata } from './eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaWikiKeywordPage />;
}
