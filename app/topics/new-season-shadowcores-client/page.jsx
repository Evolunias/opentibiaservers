import NewSeasonShadowcoresClientKeywordPage, { generateMetadata } from './new-season-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresClientKeywordPage />;
}
