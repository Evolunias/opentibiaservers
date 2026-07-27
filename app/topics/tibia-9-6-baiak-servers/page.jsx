import Tibia96BaiakServersKeywordPage, { generateMetadata } from './tibia-9-6-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakServersKeywordPage />;
}
