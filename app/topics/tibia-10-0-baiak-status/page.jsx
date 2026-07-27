import Tibia100BaiakStatusKeywordPage, { generateMetadata } from './tibia-10-0-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakStatusKeywordPage />;
}
