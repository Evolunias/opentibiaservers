import Tibia13WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-13-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersRegisterKeywordPage />;
}
