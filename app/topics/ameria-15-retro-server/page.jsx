import Ameria15RetroServerKeywordPage, { generateMetadata } from './ameria-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15RetroServerKeywordPage />;
}
