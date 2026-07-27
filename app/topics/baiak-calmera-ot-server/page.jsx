import BaiakCalmeraOtServerKeywordPage, { generateMetadata } from './baiak-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakCalmeraOtServerKeywordPage />;
}
