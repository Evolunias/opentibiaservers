import Shadowcores12RetroServerKeywordPage, { generateMetadata } from './shadowcores-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12RetroServerKeywordPage />;
}
