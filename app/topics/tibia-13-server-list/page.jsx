import Tibia13ServerListKeywordPage, { generateMetadata } from './tibia-13-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerListKeywordPage />;
}
