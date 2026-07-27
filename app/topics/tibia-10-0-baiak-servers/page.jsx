import Tibia100BaiakServersKeywordPage, { generateMetadata } from './tibia-10-0-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakServersKeywordPage />;
}
