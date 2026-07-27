import BaiakMediviaServerKeywordPage, { generateMetadata } from './baiak-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakMediviaServerKeywordPage />;
}
