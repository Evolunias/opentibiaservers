import Tibia84FreshStartServerListKeywordPage, { generateMetadata } from './tibia-8-4-fresh-start-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84FreshStartServerListKeywordPage />;
}
