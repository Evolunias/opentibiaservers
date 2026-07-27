import Tibia11BaiakOtServerKeywordPage, { generateMetadata } from './tibia-11-baiak-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakOtServerKeywordPage />;
}
