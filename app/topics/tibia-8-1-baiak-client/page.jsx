import Tibia81BaiakClientKeywordPage, { generateMetadata } from './tibia-8-1-baiak-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakClientKeywordPage />;
}
