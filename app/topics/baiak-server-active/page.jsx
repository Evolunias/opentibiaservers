import BaiakServerActiveKeywordPage, { generateMetadata } from './baiak-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerActiveKeywordPage />;
}
