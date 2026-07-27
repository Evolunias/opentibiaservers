import Ameria13RetroServerKeywordPage, { generateMetadata } from './ameria-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13RetroServerKeywordPage />;
}
