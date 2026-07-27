import Tibiame13RetroServerKeywordPage, { generateMetadata } from './tibiame-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13RetroServerKeywordPage />;
}
