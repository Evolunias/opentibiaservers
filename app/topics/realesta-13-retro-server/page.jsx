import Realesta13RetroServerKeywordPage, { generateMetadata } from './realesta-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta13RetroServerKeywordPage />;
}
