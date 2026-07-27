import Cyntara71RetroServerKeywordPage, { generateMetadata } from './cyntara-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara71RetroServerKeywordPage />;
}
