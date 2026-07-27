import CurrentSaintsotTibiaKeywordPage, { generateMetadata } from './current-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotTibiaKeywordPage />;
}
