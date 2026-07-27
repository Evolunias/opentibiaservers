import Evolera13RetroServerKeywordPage, { generateMetadata } from './evolera-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera13RetroServerKeywordPage />;
}
