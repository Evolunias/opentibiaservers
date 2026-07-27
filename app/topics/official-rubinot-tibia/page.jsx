import OfficialRubinotTibiaKeywordPage, { generateMetadata } from './official-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotTibiaKeywordPage />;
}
