import Tibia12RetroServerListKeywordPage, { generateMetadata } from './tibia-12-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroServerListKeywordPage />;
}
