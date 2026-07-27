import Thornia12RetroServerKeywordPage, { generateMetadata } from './thornia-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12RetroServerKeywordPage />;
}
