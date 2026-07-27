import OfficialRubinotOtServerKeywordPage, { generateMetadata } from './official-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotOtServerKeywordPage />;
}
