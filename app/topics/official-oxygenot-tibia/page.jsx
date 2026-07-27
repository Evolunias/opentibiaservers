import OfficialOxygenotTibiaKeywordPage, { generateMetadata } from './official-oxygenot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotTibiaKeywordPage />;
}
