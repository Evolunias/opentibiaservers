import Tibia74WithActivePlayersRegisterKeywordPage, { generateMetadata } from './tibia-7-4-with-active-players-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithActivePlayersRegisterKeywordPage />;
}
