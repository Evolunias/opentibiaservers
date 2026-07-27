import Cyntara15RetroServerKeywordPage, { generateMetadata } from './cyntara-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15RetroServerKeywordPage />;
}
