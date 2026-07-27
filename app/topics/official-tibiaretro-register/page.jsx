import OfficialTibiaretroRegisterKeywordPage, { generateMetadata } from './official-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroRegisterKeywordPage />;
}
