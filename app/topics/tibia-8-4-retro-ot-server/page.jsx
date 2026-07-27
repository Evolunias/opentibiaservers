import Tibia84RetroOtServerKeywordPage, { generateMetadata } from './tibia-8-4-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroOtServerKeywordPage />;
}
