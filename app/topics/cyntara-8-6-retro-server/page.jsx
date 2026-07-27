import Cyntara86RetroServerKeywordPage, { generateMetadata } from './cyntara-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara86RetroServerKeywordPage />;
}
