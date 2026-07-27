import NewSeasonShadowcoresOtServerKeywordPage, { generateMetadata } from './new-season-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresOtServerKeywordPage />;
}
