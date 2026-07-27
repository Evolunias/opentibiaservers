import Tibia86BaiakServerListKeywordPage, { generateMetadata } from './tibia-8-6-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86BaiakServerListKeywordPage />;
}
