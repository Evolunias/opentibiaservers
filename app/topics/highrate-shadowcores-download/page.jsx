import HighrateShadowcoresDownloadKeywordPage, { generateMetadata } from './highrate-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresDownloadKeywordPage />;
}
