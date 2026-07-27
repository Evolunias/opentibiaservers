import Tibia14WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-14-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersRegisterKeywordPage />;
}
