import NewSeasonTibiaretroRegisterKeywordPage, { generateMetadata } from './new-season-tibiaretro-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaretroRegisterKeywordPage />;
}
