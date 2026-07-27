import Tibia14BaiakClientKeywordPage, { generateMetadata } from './tibia-14-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakClientKeywordPage />;
}
