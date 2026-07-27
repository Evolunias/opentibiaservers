import Tibia86BaiakClientKeywordPage, { generateMetadata } from './tibia-8-6-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86BaiakClientKeywordPage />;
}
