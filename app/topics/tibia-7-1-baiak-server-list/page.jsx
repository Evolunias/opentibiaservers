import Tibia71BaiakServerListKeywordPage, { generateMetadata } from './tibia-7-1-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakServerListKeywordPage />;
}
