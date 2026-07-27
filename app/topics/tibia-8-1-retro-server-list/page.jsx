import Tibia81RetroServerListKeywordPage, { generateMetadata } from './tibia-8-1-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroServerListKeywordPage />;
}
