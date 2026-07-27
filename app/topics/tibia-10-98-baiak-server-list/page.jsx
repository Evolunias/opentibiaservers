import Tibia1098BaiakServerListKeywordPage, { generateMetadata } from './tibia-10-98-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098BaiakServerListKeywordPage />;
}
