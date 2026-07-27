import NewShadowcoresDownloadKeywordPage, { generateMetadata } from './new-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresDownloadKeywordPage />;
}
