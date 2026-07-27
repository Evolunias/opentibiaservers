import BaiakIlusionFranceServerKeywordPage, { generateMetadata } from './baiak-ilusion-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionFranceServerKeywordPage />;
}
