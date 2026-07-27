import Tibia74BaiakServerListKeywordPage, { generateMetadata } from './tibia-7-4-baiak-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74BaiakServerListKeywordPage />;
}
