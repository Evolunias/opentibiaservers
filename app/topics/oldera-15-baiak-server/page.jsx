import Oldera15BaiakServerKeywordPage, { generateMetadata } from './oldera-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15BaiakServerKeywordPage />;
}
