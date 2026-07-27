import Tibia14RetroOtServerKeywordPage, { generateMetadata } from './tibia-14-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroOtServerKeywordPage />;
}
