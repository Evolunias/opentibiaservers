import OfficialRubinotLoginKeywordPage, { generateMetadata } from './official-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotLoginKeywordPage />;
}
