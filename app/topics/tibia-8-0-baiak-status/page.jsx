import Tibia80BaiakStatusKeywordPage, { generateMetadata } from './tibia-8-0-baiak-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakStatusKeywordPage />;
}
