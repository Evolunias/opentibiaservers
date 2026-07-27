import Cyntara13RetroServerKeywordPage, { generateMetadata } from './cyntara-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13RetroServerKeywordPage />;
}
