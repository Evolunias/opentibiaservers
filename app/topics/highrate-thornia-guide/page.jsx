import HighrateThorniaGuideKeywordPage, { generateMetadata } from './highrate-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThorniaGuideKeywordPage />;
}
