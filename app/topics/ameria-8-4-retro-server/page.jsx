import Ameria84RetroServerKeywordPage, { generateMetadata } from './ameria-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria84RetroServerKeywordPage />;
}
