import Tibia86RetroRegisterKeywordPage, { generateMetadata } from './tibia-8-6-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroRegisterKeywordPage />;
}
