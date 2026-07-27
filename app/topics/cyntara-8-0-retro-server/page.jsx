import Cyntara80RetroServerKeywordPage, { generateMetadata } from './cyntara-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara80RetroServerKeywordPage />;
}
