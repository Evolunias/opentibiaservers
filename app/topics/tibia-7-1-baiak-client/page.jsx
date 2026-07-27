import Tibia71BaiakClientKeywordPage, { generateMetadata } from './tibia-7-1-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakClientKeywordPage />;
}
