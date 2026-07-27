import BaiakServersSwedenKeywordPage, { generateMetadata } from './baiak-servers-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServersSwedenKeywordPage />;
}
