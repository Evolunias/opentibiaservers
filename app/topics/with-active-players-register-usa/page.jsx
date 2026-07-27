import WithActivePlayersRegisterUsaKeywordPage, { generateMetadata } from './with-active-players-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersRegisterUsaKeywordPage />;
}
