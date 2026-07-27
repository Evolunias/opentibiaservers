import Tibia14ServerListKeywordPage, { generateMetadata } from './tibia-14-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14ServerListKeywordPage />;
}
