import Miracle13RetroServerKeywordPage, { generateMetadata } from './miracle-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13RetroServerKeywordPage />;
}
