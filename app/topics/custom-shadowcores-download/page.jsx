import CustomShadowcoresDownloadKeywordPage, { generateMetadata } from './custom-shadowcores-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresDownloadKeywordPage />;
}
