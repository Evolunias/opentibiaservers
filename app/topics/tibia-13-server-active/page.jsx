import Tibia13ServerActiveKeywordPage, { generateMetadata } from './tibia-13-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerActiveKeywordPage />;
}
