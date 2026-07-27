import Ameria80RetroServerKeywordPage, { generateMetadata } from './ameria-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria80RetroServerKeywordPage />;
}
