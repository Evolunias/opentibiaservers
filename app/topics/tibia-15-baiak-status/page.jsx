import Tibia15BaiakStatusKeywordPage, { generateMetadata } from './tibia-15-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakStatusKeywordPage />;
}
