import Tibiara11BaiakServerKeywordPage, { generateMetadata } from './tibiara-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11BaiakServerKeywordPage />;
}
