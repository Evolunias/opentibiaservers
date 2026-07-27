import Tibia100WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersRegisterKeywordPage />;
}
