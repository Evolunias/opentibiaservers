import Unline11BaiakServerKeywordPage, { generateMetadata } from './unline-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11BaiakServerKeywordPage />;
}
