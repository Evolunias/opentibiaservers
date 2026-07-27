import BaiakIlusionSpellsKeywordPage, { generateMetadata } from './baiak-ilusion-spells';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionSpellsKeywordPage />;
}
