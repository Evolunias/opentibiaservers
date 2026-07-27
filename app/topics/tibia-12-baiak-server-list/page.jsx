import Tibia12BaiakServerListKeywordPage, { generateMetadata } from './tibia-12-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakServerListKeywordPage />;
}
