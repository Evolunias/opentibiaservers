import HighrateClassicusOpenTibiaKeywordPage, { generateMetadata } from './highrate-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusOpenTibiaKeywordPage />;
}
