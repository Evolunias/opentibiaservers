import OfficialMarolaotGuideKeywordPage, { generateMetadata } from './official-marolaot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotGuideKeywordPage />;
}
