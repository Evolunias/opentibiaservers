import NewSeasonShadowcoresOtKeywordPage, { generateMetadata } from './new-season-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresOtKeywordPage />;
}
