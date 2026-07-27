import HighrateOxygenotOtKeywordPage, { generateMetadata } from './highrate-oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotOtKeywordPage />;
}
