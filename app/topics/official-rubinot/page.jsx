import OfficialRubinotKeywordPage, { generateMetadata } from './official-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotKeywordPage />;
}
