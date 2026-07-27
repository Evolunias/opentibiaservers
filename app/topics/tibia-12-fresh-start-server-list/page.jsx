import Tibia12FreshStartServerListKeywordPage, { generateMetadata } from './tibia-12-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12FreshStartServerListKeywordPage />;
}
