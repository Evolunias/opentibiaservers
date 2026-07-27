import HighrateTibiaretroRegisterKeywordPage, { generateMetadata } from './highrate-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroRegisterKeywordPage />;
}
