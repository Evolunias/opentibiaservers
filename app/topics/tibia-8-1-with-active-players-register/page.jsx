import Tibia81WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersRegisterKeywordPage />;
}
