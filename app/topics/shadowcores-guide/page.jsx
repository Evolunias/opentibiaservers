import ShadowcoresGuideKeywordPage, { generateMetadata } from './shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresGuideKeywordPage />;
}
