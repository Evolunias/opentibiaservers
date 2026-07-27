import Oxygenot12RetroServerKeywordPage, { generateMetadata } from './oxygenot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12RetroServerKeywordPage />;
}
