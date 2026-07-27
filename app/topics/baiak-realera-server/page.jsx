import BaiakRealeraServerKeywordPage, { generateMetadata } from './baiak-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRealeraServerKeywordPage />;
}
