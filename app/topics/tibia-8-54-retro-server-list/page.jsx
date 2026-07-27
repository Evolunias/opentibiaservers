import Tibia854RetroServerListKeywordPage, { generateMetadata } from './tibia-8-54-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854RetroServerListKeywordPage />;
}
