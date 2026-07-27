import TopAlasteraGuideKeywordPage, { generateMetadata } from './top-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraGuideKeywordPage />;
}
