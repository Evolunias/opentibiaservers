import Tibia71RetroRegisterKeywordPage, { generateMetadata } from './tibia-7-1-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroRegisterKeywordPage />;
}
