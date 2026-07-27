import Tibia11ServerListKeywordPage, { generateMetadata } from './tibia-11-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11ServerListKeywordPage />;
}
