import BaiakIlusionResetKeywordPage, { generateMetadata } from './baiak-ilusion-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionResetKeywordPage />;
}
