import Tibia76BaiakStatusKeywordPage, { generateMetadata } from './tibia-7-6-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76BaiakStatusKeywordPage />;
}
