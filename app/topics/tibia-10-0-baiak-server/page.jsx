import Tibia100BaiakServerKeywordPage, { generateMetadata } from './tibia-10-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakServerKeywordPage />;
}
