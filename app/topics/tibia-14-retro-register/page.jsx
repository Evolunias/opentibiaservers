import Tibia14RetroRegisterKeywordPage, { generateMetadata } from './tibia-14-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroRegisterKeywordPage />;
}
