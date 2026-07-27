import Tibia11RetroOtServerKeywordPage, { generateMetadata } from './tibia-11-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroOtServerKeywordPage />;
}
