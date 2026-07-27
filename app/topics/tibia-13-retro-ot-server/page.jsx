import Tibia13RetroOtServerKeywordPage, { generateMetadata } from './tibia-13-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroOtServerKeywordPage />;
}
