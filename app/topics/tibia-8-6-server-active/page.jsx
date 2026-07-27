import Tibia86ServerActiveKeywordPage, { generateMetadata } from './tibia-8-6-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerActiveKeywordPage />;
}
