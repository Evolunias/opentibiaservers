import Tibia71FreshStartServerListKeywordPage, { generateMetadata } from './tibia-7-1-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71FreshStartServerListKeywordPage />;
}
