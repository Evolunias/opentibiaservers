import Evolunia12RetroServerKeywordPage, { generateMetadata } from './evolunia-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12RetroServerKeywordPage />;
}
