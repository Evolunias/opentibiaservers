import OfficialNilotOpenTibiaKeywordPage, { generateMetadata } from './official-nilot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotOpenTibiaKeywordPage />;
}
