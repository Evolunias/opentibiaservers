import Tibia14BaiakServerListKeywordPage, { generateMetadata } from './tibia-14-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakServerListKeywordPage />;
}
