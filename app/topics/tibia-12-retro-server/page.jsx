import Tibia12RetroServerKeywordPage, { generateMetadata } from './tibia-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroServerKeywordPage />;
}
