import BaiakTibiascapeServerKeywordPage, { generateMetadata } from './baiak-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakTibiascapeServerKeywordPage />;
}
