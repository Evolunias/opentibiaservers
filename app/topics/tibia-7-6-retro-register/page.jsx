import Tibia76RetroRegisterKeywordPage, { generateMetadata } from './tibia-7-6-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RetroRegisterKeywordPage />;
}
