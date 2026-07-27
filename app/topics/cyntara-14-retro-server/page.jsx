import Cyntara14RetroServerKeywordPage, { generateMetadata } from './cyntara-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara14RetroServerKeywordPage />;
}
