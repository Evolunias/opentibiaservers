import HighrateRealeraGuideKeywordPage, { generateMetadata } from './highrate-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRealeraGuideKeywordPage />;
}
