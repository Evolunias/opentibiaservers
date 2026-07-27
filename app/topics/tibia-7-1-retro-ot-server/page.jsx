import Tibia71RetroOtServerKeywordPage, { generateMetadata } from './tibia-7-1-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroOtServerKeywordPage />;
}
