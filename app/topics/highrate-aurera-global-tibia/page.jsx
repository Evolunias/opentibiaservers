import HighrateAureraGlobalTibiaKeywordPage, { generateMetadata } from './highrate-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAureraGlobalTibiaKeywordPage />;
}
