import Tibia80ServerListKeywordPage, { generateMetadata } from './tibia-8-0-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80ServerListKeywordPage />;
}
