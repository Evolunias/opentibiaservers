import Tibia12BaiakServerKeywordPage, { generateMetadata } from './tibia-12-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakServerKeywordPage />;
}
