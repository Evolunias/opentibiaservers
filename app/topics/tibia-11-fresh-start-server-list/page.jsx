import Tibia11FreshStartServerListKeywordPage, { generateMetadata } from './tibia-11-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartServerListKeywordPage />;
}
