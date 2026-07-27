import Tibia96BaiakServerKeywordPage, { generateMetadata } from './tibia-9-6-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakServerKeywordPage />;
}
