import Tibia84BaiakServerKeywordPage, { generateMetadata } from './tibia-8-4-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84BaiakServerKeywordPage />;
}
