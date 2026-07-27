import TibianusBrazilServersKeywordPage, { generateMetadata } from './tibianus-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusBrazilServersKeywordPage />;
}
