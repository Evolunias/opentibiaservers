import TibiantisBrazilServersKeywordPage, { generateMetadata } from './tibiantis-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisBrazilServersKeywordPage />;
}
