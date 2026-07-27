import BestTibiaretroRegisterKeywordPage, { generateMetadata } from './best-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroRegisterKeywordPage />;
}
