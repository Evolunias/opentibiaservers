import Tibia96BaiakServerListKeywordPage, { generateMetadata } from './tibia-9-6-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakServerListKeywordPage />;
}
