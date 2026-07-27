import Tibia12RetroOtServerKeywordPage, { generateMetadata } from './tibia-12-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroOtServerKeywordPage />;
}
