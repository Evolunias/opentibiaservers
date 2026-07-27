import NewSeasonShadowcoresOtsKeywordPage, { generateMetadata } from './new-season-shadowcores-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresOtsKeywordPage />;
}
