import DuraOnline15BaiakServerKeywordPage, { generateMetadata } from './dura-online-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15BaiakServerKeywordPage />;
}
