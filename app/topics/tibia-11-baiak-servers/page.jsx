import Tibia11BaiakServersKeywordPage, { generateMetadata } from './tibia-11-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakServersKeywordPage />;
}
