import Coxaot14RetroServerKeywordPage, { generateMetadata } from './coxaot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14RetroServerKeywordPage />;
}
