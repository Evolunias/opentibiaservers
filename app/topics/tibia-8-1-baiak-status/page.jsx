import Tibia81BaiakStatusKeywordPage, { generateMetadata } from './tibia-8-1-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakStatusKeywordPage />;
}
