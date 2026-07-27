import Tibia71BaiakServersKeywordPage, { generateMetadata } from './tibia-7-1-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakServersKeywordPage />;
}
