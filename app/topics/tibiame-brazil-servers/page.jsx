import TibiameBrazilServersKeywordPage, { generateMetadata } from './tibiame-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameBrazilServersKeywordPage />;
}
