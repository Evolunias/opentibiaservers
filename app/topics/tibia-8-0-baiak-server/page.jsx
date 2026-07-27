import Tibia80BaiakServerKeywordPage, { generateMetadata } from './tibia-8-0-baiak-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakServerKeywordPage />;
}
