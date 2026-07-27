import Tibia15BaiakClientKeywordPage, { generateMetadata } from './tibia-15-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakClientKeywordPage />;
}
