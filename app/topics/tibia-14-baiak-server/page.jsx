import Tibia14BaiakServerKeywordPage, { generateMetadata } from './tibia-14-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakServerKeywordPage />;
}
