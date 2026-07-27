import Tibia13ServerSwedenKeywordPage, { generateMetadata } from './tibia-13-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerSwedenKeywordPage />;
}
