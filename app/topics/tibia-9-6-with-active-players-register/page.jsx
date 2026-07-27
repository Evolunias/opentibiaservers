import Tibia96WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersRegisterKeywordPage />;
}
