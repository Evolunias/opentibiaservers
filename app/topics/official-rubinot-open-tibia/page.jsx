import OfficialRubinotOpenTibiaKeywordPage, { generateMetadata } from './official-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRubinotOpenTibiaKeywordPage />;
}
