import Classicus15BaiakServerKeywordPage, { generateMetadata } from './classicus-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15BaiakServerKeywordPage />;
}
