import BaiakGuideMexicoKeywordPage, { generateMetadata } from './baiak-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGuideMexicoKeywordPage />;
}
