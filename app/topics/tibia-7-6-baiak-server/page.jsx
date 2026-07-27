import Tibia76BaiakServerKeywordPage, { generateMetadata } from './tibia-7-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76BaiakServerKeywordPage />;
}
