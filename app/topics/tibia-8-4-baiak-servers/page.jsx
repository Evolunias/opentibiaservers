import Tibia84BaiakServersKeywordPage, { generateMetadata } from './tibia-8-4-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84BaiakServersKeywordPage />;
}
