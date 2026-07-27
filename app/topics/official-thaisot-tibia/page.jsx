import OfficialThaisotTibiaKeywordPage, { generateMetadata } from './official-thaisot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotTibiaKeywordPage />;
}
