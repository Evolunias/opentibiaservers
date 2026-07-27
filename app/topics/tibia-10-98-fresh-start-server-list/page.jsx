import Tibia1098FreshStartServerListKeywordPage, { generateMetadata } from './tibia-10-98-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098FreshStartServerListKeywordPage />;
}
