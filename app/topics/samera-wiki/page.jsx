import SameraWikiKeywordPage, { generateMetadata } from './samera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraWikiKeywordPage />;
}
