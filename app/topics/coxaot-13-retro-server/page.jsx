import Coxaot13RetroServerKeywordPage, { generateMetadata } from './coxaot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13RetroServerKeywordPage />;
}
