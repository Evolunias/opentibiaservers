import OfficialRubinotGuideKeywordPage, { generateMetadata } from './official-rubinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotGuideKeywordPage />;
}
