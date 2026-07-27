import Tibiara13BaiakServerKeywordPage, { generateMetadata } from './tibiara-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13BaiakServerKeywordPage />;
}
