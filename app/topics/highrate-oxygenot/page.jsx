import HighrateOxygenotKeywordPage, { generateMetadata } from './highrate-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOxygenotKeywordPage />;
}
