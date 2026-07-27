import HighrateRubinotOfficialKeywordPage, { generateMetadata } from './highrate-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRubinotOfficialKeywordPage />;
}
