import Tibia81RetroRegisterKeywordPage, { generateMetadata } from './tibia-8-1-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroRegisterKeywordPage />;
}
