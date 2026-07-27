import Tibia11BaiakServerKeywordPage, { generateMetadata } from './tibia-11-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakServerKeywordPage />;
}
