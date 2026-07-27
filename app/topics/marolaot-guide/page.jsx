import MarolaotGuideKeywordPage, { generateMetadata } from './marolaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotGuideKeywordPage />;
}
