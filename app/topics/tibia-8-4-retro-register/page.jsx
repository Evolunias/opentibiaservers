import Tibia84RetroRegisterKeywordPage, { generateMetadata } from './tibia-8-4-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroRegisterKeywordPage />;
}
