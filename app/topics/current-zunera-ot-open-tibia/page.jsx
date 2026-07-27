import CurrentZuneraOtOpenTibiaKeywordPage, { generateMetadata } from './current-zunera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtOpenTibiaKeywordPage />;
}
