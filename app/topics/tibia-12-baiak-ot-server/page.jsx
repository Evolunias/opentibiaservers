import Tibia12BaiakOtServerKeywordPage, { generateMetadata } from './tibia-12-baiak-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakOtServerKeywordPage />;
}
