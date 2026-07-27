import Tibia74RetroRegisterKeywordPage, { generateMetadata } from './tibia-7-4-retro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroRegisterKeywordPage />;
}
