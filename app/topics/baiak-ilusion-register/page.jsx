import BaiakIlusionRegisterKeywordPage, { generateMetadata } from './baiak-ilusion-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionRegisterKeywordPage />;
}
