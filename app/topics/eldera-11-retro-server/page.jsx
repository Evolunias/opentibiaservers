import Eldera11RetroServerKeywordPage, { generateMetadata } from './eldera-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11RetroServerKeywordPage />;
}
