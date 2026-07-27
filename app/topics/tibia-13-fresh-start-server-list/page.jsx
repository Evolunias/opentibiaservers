import Tibia13FreshStartServerListKeywordPage, { generateMetadata } from './tibia-13-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartServerListKeywordPage />;
}
