import BaiakRealestaServerKeywordPage, { generateMetadata } from './baiak-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRealestaServerKeywordPage />;
}
