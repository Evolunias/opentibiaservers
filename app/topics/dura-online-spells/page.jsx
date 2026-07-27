import DuraOnlineSpellsKeywordPage, { generateMetadata } from './dura-online-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineSpellsKeywordPage />;
}
