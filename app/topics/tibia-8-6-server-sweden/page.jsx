import Tibia86ServerSwedenKeywordPage, { generateMetadata } from './tibia-8-6-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerSwedenKeywordPage />;
}
