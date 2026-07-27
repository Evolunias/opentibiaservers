import NewSeasonShadowcoresDownloadKeywordPage, { generateMetadata } from './new-season-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresDownloadKeywordPage />;
}
