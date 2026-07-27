import TopMarolaotGuideKeywordPage, { generateMetadata } from './top-marolaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotGuideKeywordPage />;
}
