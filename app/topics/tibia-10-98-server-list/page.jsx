import Tibia1098ServerListKeywordPage, { generateMetadata } from './tibia-10-98-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerListKeywordPage />;
}
