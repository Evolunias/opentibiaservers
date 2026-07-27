import Tibia13RetroRegisterKeywordPage, { generateMetadata } from './tibia-13-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroRegisterKeywordPage />;
}
