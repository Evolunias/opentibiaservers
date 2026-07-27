import TibiameSwedenServerKeywordPage, { generateMetadata } from './tibiame-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSwedenServerKeywordPage />;
}
