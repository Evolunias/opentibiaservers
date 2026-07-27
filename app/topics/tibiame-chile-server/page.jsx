import TibiameChileServerKeywordPage, { generateMetadata } from './tibiame-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameChileServerKeywordPage />;
}
