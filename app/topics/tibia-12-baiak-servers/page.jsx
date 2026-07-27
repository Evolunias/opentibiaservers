import Tibia12BaiakServersKeywordPage, { generateMetadata } from './tibia-12-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakServersKeywordPage />;
}
