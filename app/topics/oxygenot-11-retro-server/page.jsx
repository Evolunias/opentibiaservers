import Oxygenot11RetroServerKeywordPage, { generateMetadata } from './oxygenot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot11RetroServerKeywordPage />;
}
