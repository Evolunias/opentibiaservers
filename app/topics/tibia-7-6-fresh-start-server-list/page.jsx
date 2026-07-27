import Tibia76FreshStartServerListKeywordPage, { generateMetadata } from './tibia-7-6-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76FreshStartServerListKeywordPage />;
}
