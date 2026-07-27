import Tibia1098BaiakStatusKeywordPage, { generateMetadata } from './tibia-10-98-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098BaiakStatusKeywordPage />;
}
