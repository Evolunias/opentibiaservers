import Coxaot12RetroServerKeywordPage, { generateMetadata } from './coxaot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12RetroServerKeywordPage />;
}
