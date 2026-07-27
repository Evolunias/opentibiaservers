import Tibia71RetroServerListKeywordPage, { generateMetadata } from './tibia-7-1-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroServerListKeywordPage />;
}
