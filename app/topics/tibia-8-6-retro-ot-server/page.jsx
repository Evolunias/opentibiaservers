import Tibia86RetroOtServerKeywordPage, { generateMetadata } from './tibia-8-6-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroOtServerKeywordPage />;
}
