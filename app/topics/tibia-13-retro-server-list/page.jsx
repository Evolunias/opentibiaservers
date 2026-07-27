import Tibia13RetroServerListKeywordPage, { generateMetadata } from './tibia-13-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroServerListKeywordPage />;
}
