import Tibia1098ServerActiveKeywordPage, { generateMetadata } from './tibia-10-98-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerActiveKeywordPage />;
}
