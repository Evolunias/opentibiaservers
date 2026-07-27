import Tibia81RetroOtServerKeywordPage, { generateMetadata } from './tibia-8-1-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroOtServerKeywordPage />;
}
