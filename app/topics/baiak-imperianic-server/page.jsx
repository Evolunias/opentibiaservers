import BaiakImperianicServerKeywordPage, { generateMetadata } from './baiak-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakImperianicServerKeywordPage />;
}
