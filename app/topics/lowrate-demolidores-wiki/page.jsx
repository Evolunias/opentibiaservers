import LowrateDemolidoresWikiKeywordPage, { generateMetadata } from './lowrate-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDemolidoresWikiKeywordPage />;
}
