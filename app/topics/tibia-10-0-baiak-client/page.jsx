import Tibia100BaiakClientKeywordPage, { generateMetadata } from './tibia-10-0-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakClientKeywordPage />;
}
