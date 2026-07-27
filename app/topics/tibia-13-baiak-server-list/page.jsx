import Tibia13BaiakServerListKeywordPage, { generateMetadata } from './tibia-13-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakServerListKeywordPage />;
}
