import TibiaoriginsVipKeywordPage, { generateMetadata } from './tibiaorigins-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsVipKeywordPage />;
}
