import Tibia86BaiakStatusKeywordPage, { generateMetadata } from './tibia-8-6-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86BaiakStatusKeywordPage />;
}
