import Tibia772RetroServerListKeywordPage, { generateMetadata } from './tibia-7-72-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RetroServerListKeywordPage />;
}
