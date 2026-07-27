import Tibia14BaiakStatusKeywordPage, { generateMetadata } from './tibia-14-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakStatusKeywordPage />;
}
