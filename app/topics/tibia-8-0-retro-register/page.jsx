import Tibia80RetroRegisterKeywordPage, { generateMetadata } from './tibia-8-0-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroRegisterKeywordPage />;
}
