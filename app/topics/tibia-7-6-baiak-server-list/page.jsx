import Tibia76BaiakServerListKeywordPage, { generateMetadata } from './tibia-7-6-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76BaiakServerListKeywordPage />;
}
