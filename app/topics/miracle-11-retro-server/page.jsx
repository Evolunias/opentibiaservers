import Miracle11RetroServerKeywordPage, { generateMetadata } from './miracle-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11RetroServerKeywordPage />;
}
