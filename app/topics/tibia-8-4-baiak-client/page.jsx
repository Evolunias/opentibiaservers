import Tibia84BaiakClientKeywordPage, { generateMetadata } from './tibia-8-4-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84BaiakClientKeywordPage />;
}
