import Imperianic12RetroServerKeywordPage, { generateMetadata } from './imperianic-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic12RetroServerKeywordPage />;
}
