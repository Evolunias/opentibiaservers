import NewSeasonShadowcoresLoginKeywordPage, { generateMetadata } from './new-season-shadowcores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresLoginKeywordPage />;
}
