import AmeriaSpellsKeywordPage, { generateMetadata } from './ameria-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSpellsKeywordPage />;
}
