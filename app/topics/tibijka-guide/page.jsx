import TibijkaGuideKeywordPage, { generateMetadata } from './tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaGuideKeywordPage />;
}
