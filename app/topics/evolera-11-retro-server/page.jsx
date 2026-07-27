import Evolera11RetroServerKeywordPage, { generateMetadata } from './evolera-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera11RetroServerKeywordPage />;
}
