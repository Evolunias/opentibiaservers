import LowrateRubinotOfficialKeywordPage, { generateMetadata } from './lowrate-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRubinotOfficialKeywordPage />;
}
