import Tibia96RetroOtServerKeywordPage, { generateMetadata } from './tibia-9-6-retro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroOtServerKeywordPage />;
}
