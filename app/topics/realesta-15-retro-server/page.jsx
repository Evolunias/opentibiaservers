import Realesta15RetroServerKeywordPage, { generateMetadata } from './realesta-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta15RetroServerKeywordPage />;
}
