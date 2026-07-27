import HighrateAlasteraGuideKeywordPage, { generateMetadata } from './highrate-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAlasteraGuideKeywordPage />;
}
