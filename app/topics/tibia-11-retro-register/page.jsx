import Tibia11RetroRegisterKeywordPage, { generateMetadata } from './tibia-11-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroRegisterKeywordPage />;
}
