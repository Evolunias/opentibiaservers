import BaiakArcaniarlServerKeywordPage, { generateMetadata } from './baiak-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakArcaniarlServerKeywordPage />;
}
