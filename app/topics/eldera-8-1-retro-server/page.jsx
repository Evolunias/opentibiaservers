import Eldera81RetroServerKeywordPage, { generateMetadata } from './eldera-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera81RetroServerKeywordPage />;
}
