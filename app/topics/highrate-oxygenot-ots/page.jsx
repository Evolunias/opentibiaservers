import HighrateOxygenotOtsKeywordPage, { generateMetadata } from './highrate-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotOtsKeywordPage />;
}
