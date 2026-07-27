import BaiakIlusionMexicoServerKeywordPage, { generateMetadata } from './baiak-ilusion-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionMexicoServerKeywordPage />;
}
