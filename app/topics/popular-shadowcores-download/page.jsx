import PopularShadowcoresDownloadKeywordPage, { generateMetadata } from './popular-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresDownloadKeywordPage />;
}
