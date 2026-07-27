import Tibia11BaiakServerListKeywordPage, { generateMetadata } from './tibia-11-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakServerListKeywordPage />;
}
