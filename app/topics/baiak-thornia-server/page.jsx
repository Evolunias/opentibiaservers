import BaiakThorniaServerKeywordPage, { generateMetadata } from './baiak-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakThorniaServerKeywordPage />;
}
