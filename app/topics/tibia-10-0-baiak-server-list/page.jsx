import Tibia100BaiakServerListKeywordPage, { generateMetadata } from './tibia-10-0-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakServerListKeywordPage />;
}
