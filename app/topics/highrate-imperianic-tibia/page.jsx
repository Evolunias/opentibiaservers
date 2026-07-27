import HighrateImperianicTibiaKeywordPage, { generateMetadata } from './highrate-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicTibiaKeywordPage />;
}
