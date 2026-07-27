import Cyntara11RetroServerKeywordPage, { generateMetadata } from './cyntara-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11RetroServerKeywordPage />;
}
