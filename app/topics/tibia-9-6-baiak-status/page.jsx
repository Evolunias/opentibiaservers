import Tibia96BaiakStatusKeywordPage, { generateMetadata } from './tibia-9-6-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakStatusKeywordPage />;
}
