import Tibia96BaiakClientKeywordPage, { generateMetadata } from './tibia-9-6-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakClientKeywordPage />;
}
