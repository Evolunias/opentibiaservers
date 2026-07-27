import Tibia772FreshStartServerListKeywordPage, { generateMetadata } from './tibia-7-72-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772FreshStartServerListKeywordPage />;
}
