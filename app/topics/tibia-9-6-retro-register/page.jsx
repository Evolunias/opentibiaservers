import Tibia96RetroRegisterKeywordPage, { generateMetadata } from './tibia-9-6-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroRegisterKeywordPage />;
}
