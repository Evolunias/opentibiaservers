import Tibia12WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-12-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersRegisterKeywordPage />;
}
