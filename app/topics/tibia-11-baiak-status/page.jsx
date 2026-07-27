import Tibia11BaiakStatusKeywordPage, { generateMetadata } from './tibia-11-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakStatusKeywordPage />;
}
