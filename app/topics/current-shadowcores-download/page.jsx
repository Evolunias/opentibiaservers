import CurrentShadowcoresDownloadKeywordPage, { generateMetadata } from './current-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresDownloadKeywordPage />;
}
