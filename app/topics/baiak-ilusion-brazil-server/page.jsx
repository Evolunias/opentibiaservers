import BaiakIlusionBrazilServerKeywordPage, { generateMetadata } from './baiak-ilusion-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionBrazilServerKeywordPage />;
}
