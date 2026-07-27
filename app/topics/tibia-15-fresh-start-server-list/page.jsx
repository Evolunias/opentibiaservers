import Tibia15FreshStartServerListKeywordPage, { generateMetadata } from './tibia-15-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15FreshStartServerListKeywordPage />;
}
