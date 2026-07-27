import Tibia14RetroServerListKeywordPage, { generateMetadata } from './tibia-14-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroServerListKeywordPage />;
}
