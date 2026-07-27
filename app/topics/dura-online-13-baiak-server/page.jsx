import DuraOnline13BaiakServerKeywordPage, { generateMetadata } from './dura-online-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline13BaiakServerKeywordPage />;
}
