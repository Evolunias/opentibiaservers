import Tibia81BaiakServerKeywordPage, { generateMetadata } from './tibia-8-1-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakServerKeywordPage />;
}
