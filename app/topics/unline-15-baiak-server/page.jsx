import Unline15BaiakServerKeywordPage, { generateMetadata } from './unline-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline15BaiakServerKeywordPage />;
}
