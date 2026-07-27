import HighrateZuneraOtTibiaKeywordPage, { generateMetadata } from './highrate-zunera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZuneraOtTibiaKeywordPage />;
}
