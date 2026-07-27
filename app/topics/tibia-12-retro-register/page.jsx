import Tibia12RetroRegisterKeywordPage, { generateMetadata } from './tibia-12-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroRegisterKeywordPage />;
}
