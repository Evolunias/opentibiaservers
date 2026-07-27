import TibiaretroRegisterKeywordPage, { generateMetadata } from './tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroRegisterKeywordPage />;
}
