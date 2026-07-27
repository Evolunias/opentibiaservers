import Tibia14BaiakServersKeywordPage, { generateMetadata } from './tibia-14-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakServersKeywordPage />;
}
