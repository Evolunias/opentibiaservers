import CyntaraSpellsKeywordPage, { generateMetadata } from './cyntara-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraSpellsKeywordPage />;
}
