import OfficialRubinotOtKeywordPage, { generateMetadata } from './official-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotOtKeywordPage />;
}
