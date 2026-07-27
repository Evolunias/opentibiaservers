import HighrateRubinotKeywordPage, { generateMetadata } from './highrate-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotKeywordPage />;
}
