import BaiakMadnessaliveServerKeywordPage, { generateMetadata } from './baiak-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakMadnessaliveServerKeywordPage />;
}
