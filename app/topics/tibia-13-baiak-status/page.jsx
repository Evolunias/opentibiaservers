import Tibia13BaiakStatusKeywordPage, { generateMetadata } from './tibia-13-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakStatusKeywordPage />;
}
