import Tibia80BaiakServerListKeywordPage, { generateMetadata } from './tibia-8-0-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakServerListKeywordPage />;
}
