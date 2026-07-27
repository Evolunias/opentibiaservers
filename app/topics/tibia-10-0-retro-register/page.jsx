import Tibia100RetroRegisterKeywordPage, { generateMetadata } from './tibia-10-0-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroRegisterKeywordPage />;
}
