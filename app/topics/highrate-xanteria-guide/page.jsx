import HighrateXanteriaGuideKeywordPage, { generateMetadata } from './highrate-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaGuideKeywordPage />;
}
