import TibiameRetroServerArgentinaKeywordPage, { generateMetadata } from './tibiame-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRetroServerArgentinaKeywordPage />;
}
