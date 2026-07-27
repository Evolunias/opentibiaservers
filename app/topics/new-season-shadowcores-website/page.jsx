import NewSeasonShadowcoresWebsiteKeywordPage, { generateMetadata } from './new-season-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresWebsiteKeywordPage />;
}
