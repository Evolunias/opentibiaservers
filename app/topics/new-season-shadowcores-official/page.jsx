import NewSeasonShadowcoresOfficialKeywordPage, { generateMetadata } from './new-season-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresOfficialKeywordPage />;
}
