import Tibia81BaiakServerListKeywordPage, { generateMetadata } from './tibia-8-1-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakServerListKeywordPage />;
}
