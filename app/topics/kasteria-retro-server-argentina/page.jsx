import KasteriaRetroServerArgentinaKeywordPage, { generateMetadata } from './kasteria-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRetroServerArgentinaKeywordPage />;
}
