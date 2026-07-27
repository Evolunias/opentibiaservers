import Tibia81BaiakServersKeywordPage, { generateMetadata } from './tibia-8-1-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakServersKeywordPage />;
}
