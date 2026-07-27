import ElderaSpellsKeywordPage, { generateMetadata } from './eldera-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaSpellsKeywordPage />;
}
