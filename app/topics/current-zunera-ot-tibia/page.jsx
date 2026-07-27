import CurrentZuneraOtTibiaKeywordPage, { generateMetadata } from './current-zunera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtTibiaKeywordPage />;
}
