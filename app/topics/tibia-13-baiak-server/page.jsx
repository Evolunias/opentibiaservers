import Tibia13BaiakServerKeywordPage, { generateMetadata } from './tibia-13-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakServerKeywordPage />;
}
