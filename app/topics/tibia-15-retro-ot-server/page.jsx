import Tibia15RetroOtServerKeywordPage, { generateMetadata } from './tibia-15-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroOtServerKeywordPage />;
}
