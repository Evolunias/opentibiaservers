import Tibia86FreshStartServerListKeywordPage, { generateMetadata } from './tibia-8-6-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86FreshStartServerListKeywordPage />;
}
