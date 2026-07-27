import NewSeasonShadowcoresGuideKeywordPage, { generateMetadata } from './new-season-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresGuideKeywordPage />;
}
