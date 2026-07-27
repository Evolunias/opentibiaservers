import Tibia15WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-15-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersRegisterKeywordPage />;
}
