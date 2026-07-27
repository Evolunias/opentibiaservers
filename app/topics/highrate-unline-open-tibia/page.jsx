import HighrateUnlineOpenTibiaKeywordPage, { generateMetadata } from './highrate-unline-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineOpenTibiaKeywordPage />;
}
