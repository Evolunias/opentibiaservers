import HighrateOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './highrate-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessOpenTibiaKeywordPage />;
}
