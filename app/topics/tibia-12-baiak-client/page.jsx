import Tibia12BaiakClientKeywordPage, { generateMetadata } from './tibia-12-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakClientKeywordPage />;
}
