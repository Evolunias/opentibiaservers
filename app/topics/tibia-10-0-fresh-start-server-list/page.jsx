import Tibia100FreshStartServerListKeywordPage, { generateMetadata } from './tibia-10-0-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100FreshStartServerListKeywordPage />;
}
