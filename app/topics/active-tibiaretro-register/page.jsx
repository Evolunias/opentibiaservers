import ActiveTibiaretroRegisterKeywordPage, { generateMetadata } from './active-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaretroRegisterKeywordPage />;
}
