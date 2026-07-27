import Tibia1098BaiakServersKeywordPage, { generateMetadata } from './tibia-10-98-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098BaiakServersKeywordPage />;
}
