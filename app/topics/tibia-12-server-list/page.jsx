import Tibia12ServerListKeywordPage, { generateMetadata } from './tibia-12-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12ServerListKeywordPage />;
}
