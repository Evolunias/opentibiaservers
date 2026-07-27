import DoleraWikiKeywordPage, { generateMetadata } from './dolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraWikiKeywordPage />;
}
