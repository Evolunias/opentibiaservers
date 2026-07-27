import OfficialThaisotOpenTibiaKeywordPage, { generateMetadata } from './official-thaisot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotOpenTibiaKeywordPage />;
}
