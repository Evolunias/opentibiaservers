import DuraOnline12BaiakServerKeywordPage, { generateMetadata } from './dura-online-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline12BaiakServerKeywordPage />;
}
