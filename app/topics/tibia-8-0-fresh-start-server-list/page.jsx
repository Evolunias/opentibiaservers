import Tibia80FreshStartServerListKeywordPage, { generateMetadata } from './tibia-8-0-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80FreshStartServerListKeywordPage />;
}
