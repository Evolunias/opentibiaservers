import HighrateImperianicOpenTibiaKeywordPage, { generateMetadata } from './highrate-imperianic-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicOpenTibiaKeywordPage />;
}
