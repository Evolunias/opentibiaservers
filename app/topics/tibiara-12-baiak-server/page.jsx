import Tibiara12BaiakServerKeywordPage, { generateMetadata } from './tibiara-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12BaiakServerKeywordPage />;
}
