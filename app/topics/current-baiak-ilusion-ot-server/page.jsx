import CurrentBaiakIlusionOtServerKeywordPage, { generateMetadata } from './current-baiak-ilusion-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBaiakIlusionOtServerKeywordPage />;
}
