import Tibia81FreshStartServerListKeywordPage, { generateMetadata } from './tibia-8-1-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81FreshStartServerListKeywordPage />;
}
