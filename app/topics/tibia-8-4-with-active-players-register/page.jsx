import Tibia84WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersRegisterKeywordPage />;
}
