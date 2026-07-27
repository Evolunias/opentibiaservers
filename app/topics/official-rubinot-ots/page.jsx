import OfficialRubinotOtsKeywordPage, { generateMetadata } from './official-rubinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotOtsKeywordPage />;
}
