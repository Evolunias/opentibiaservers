import HighrateAlasteraOpenTibiaKeywordPage, { generateMetadata } from './highrate-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraOpenTibiaKeywordPage />;
}
