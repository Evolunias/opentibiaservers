import Tibia76BaiakClientKeywordPage, { generateMetadata } from './tibia-7-6-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76BaiakClientKeywordPage />;
}
