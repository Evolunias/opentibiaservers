import OfficialSaintsotOpenTibiaKeywordPage, { generateMetadata } from './official-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotOpenTibiaKeywordPage />;
}
