import HighrateCalmeraOtOpenTibiaKeywordPage, { generateMetadata } from './highrate-calmera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCalmeraOtOpenTibiaKeywordPage />;
}
