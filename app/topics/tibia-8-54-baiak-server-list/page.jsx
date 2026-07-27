import Tibia854BaiakServerListKeywordPage, { generateMetadata } from './tibia-8-54-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854BaiakServerListKeywordPage />;
}
