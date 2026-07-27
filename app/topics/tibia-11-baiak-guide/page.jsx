import Tibia11BaiakGuideKeywordPage, { generateMetadata } from './tibia-11-baiak-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakGuideKeywordPage />;
}
