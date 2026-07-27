import Tibia71ServerListKeywordPage, { generateMetadata } from './tibia-7-1-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71ServerListKeywordPage />;
}
