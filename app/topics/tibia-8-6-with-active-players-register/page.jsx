import Tibia86WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersRegisterKeywordPage />;
}
