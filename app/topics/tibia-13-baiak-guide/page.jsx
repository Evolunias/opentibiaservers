import Tibia13BaiakGuideKeywordPage, { generateMetadata } from './tibia-13-baiak-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakGuideKeywordPage />;
}
