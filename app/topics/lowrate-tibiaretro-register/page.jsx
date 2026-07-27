import LowrateTibiaretroRegisterKeywordPage, { generateMetadata } from './lowrate-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroRegisterKeywordPage />;
}
