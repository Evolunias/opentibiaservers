import Realera13BaiakServerKeywordPage, { generateMetadata } from './realera-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13BaiakServerKeywordPage />;
}
