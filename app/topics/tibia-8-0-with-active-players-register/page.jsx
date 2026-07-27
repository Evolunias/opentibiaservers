import Tibia80WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersRegisterKeywordPage />;
}
