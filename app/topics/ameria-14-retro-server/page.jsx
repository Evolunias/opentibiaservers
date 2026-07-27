import Ameria14RetroServerKeywordPage, { generateMetadata } from './ameria-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria14RetroServerKeywordPage />;
}
