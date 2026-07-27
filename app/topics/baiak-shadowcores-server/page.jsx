import BaiakShadowcoresServerKeywordPage, { generateMetadata } from './baiak-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakShadowcoresServerKeywordPage />;
}
