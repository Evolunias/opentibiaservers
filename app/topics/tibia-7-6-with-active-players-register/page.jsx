import Tibia76WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersRegisterKeywordPage />;
}
