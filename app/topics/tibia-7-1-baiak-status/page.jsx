import Tibia71BaiakStatusKeywordPage, { generateMetadata } from './tibia-7-1-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakStatusKeywordPage />;
}
