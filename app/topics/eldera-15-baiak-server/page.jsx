import Eldera15BaiakServerKeywordPage, { generateMetadata } from './eldera-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15BaiakServerKeywordPage />;
}
