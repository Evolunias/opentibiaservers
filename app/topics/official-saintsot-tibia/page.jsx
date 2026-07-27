import OfficialSaintsotTibiaKeywordPage, { generateMetadata } from './official-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotTibiaKeywordPage />;
}
