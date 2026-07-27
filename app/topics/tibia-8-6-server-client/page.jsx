import Tibia86ServerClientKeywordPage, { generateMetadata } from './tibia-8-6-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerClientKeywordPage />;
}
