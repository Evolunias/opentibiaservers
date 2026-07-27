import Tibia13BaiakServersKeywordPage, { generateMetadata } from './tibia-13-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13BaiakServersKeywordPage />;
}
