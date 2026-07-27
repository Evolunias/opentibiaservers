import OfficialRubinotServerKeywordPage, { generateMetadata } from './official-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotServerKeywordPage />;
}
