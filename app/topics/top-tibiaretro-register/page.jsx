import TopTibiaretroRegisterKeywordPage, { generateMetadata } from './top-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaretroRegisterKeywordPage />;
}
