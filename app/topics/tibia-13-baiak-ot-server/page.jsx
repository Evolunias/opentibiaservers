import Tibia13BaiakOtServerKeywordPage, { generateMetadata } from './tibia-13-baiak-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakOtServerKeywordPage />;
}
