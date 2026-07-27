import HighrateAureraGlobalGuideKeywordPage, { generateMetadata } from './highrate-aurera-global-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAureraGlobalGuideKeywordPage />;
}
