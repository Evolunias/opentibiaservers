import TibiameFunServerKeywordPage, { generateMetadata } from './tibiame-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameFunServerKeywordPage />;
}
