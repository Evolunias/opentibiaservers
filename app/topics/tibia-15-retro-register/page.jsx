import Tibia15RetroRegisterKeywordPage, { generateMetadata } from './tibia-15-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroRegisterKeywordPage />;
}
