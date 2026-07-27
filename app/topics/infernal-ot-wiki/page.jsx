import InfernalOtWikiKeywordPage, { generateMetadata } from './infernal-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtWikiKeywordPage />;
}
