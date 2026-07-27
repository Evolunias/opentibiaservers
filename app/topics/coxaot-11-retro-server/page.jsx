import Coxaot11RetroServerKeywordPage, { generateMetadata } from './coxaot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11RetroServerKeywordPage />;
}
