import BaiakAlasteraServerKeywordPage, { generateMetadata } from './baiak-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakAlasteraServerKeywordPage />;
}
