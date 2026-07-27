import IridiaWikiKeywordPage, { generateMetadata } from './iridia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IridiaWikiKeywordPage />;
}
