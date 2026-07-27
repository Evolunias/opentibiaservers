import Tibia12BaiakStatusKeywordPage, { generateMetadata } from './tibia-12-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakStatusKeywordPage />;
}
