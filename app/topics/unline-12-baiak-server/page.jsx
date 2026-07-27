import Unline12BaiakServerKeywordPage, { generateMetadata } from './unline-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline12BaiakServerKeywordPage />;
}
