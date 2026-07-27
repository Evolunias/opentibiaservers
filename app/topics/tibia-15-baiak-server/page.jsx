import Tibia15BaiakServerKeywordPage, { generateMetadata } from './tibia-15-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakServerKeywordPage />;
}
