import HighrateImperianicGuideKeywordPage, { generateMetadata } from './highrate-imperianic-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateImperianicGuideKeywordPage />;
}
