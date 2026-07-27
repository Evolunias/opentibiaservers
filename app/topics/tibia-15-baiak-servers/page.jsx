import Tibia15BaiakServersKeywordPage, { generateMetadata } from './tibia-15-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakServersKeywordPage />;
}
