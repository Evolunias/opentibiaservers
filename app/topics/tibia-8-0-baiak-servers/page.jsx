import Tibia80BaiakServersKeywordPage, { generateMetadata } from './tibia-8-0-baiak-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakServersKeywordPage />;
}
