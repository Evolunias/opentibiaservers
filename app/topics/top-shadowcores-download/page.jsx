import TopShadowcoresDownloadKeywordPage, { generateMetadata } from './top-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresDownloadKeywordPage />;
}
