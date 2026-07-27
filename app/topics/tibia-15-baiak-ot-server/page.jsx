import Tibia15BaiakOtServerKeywordPage, { generateMetadata } from './tibia-15-baiak-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakOtServerKeywordPage />;
}
