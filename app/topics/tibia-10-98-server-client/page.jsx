import Tibia1098ServerClientKeywordPage, { generateMetadata } from './tibia-10-98-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerClientKeywordPage />;
}
