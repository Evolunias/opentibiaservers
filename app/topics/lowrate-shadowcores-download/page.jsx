import LowrateShadowcoresDownloadKeywordPage, { generateMetadata } from './lowrate-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateShadowcoresDownloadKeywordPage />;
}
