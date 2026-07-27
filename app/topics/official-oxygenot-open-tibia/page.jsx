import OfficialOxygenotOpenTibiaKeywordPage, { generateMetadata } from './official-oxygenot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotOpenTibiaKeywordPage />;
}
