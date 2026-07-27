import CurrentSaintsotOpenTibiaKeywordPage, { generateMetadata } from './current-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotOpenTibiaKeywordPage />;
}
