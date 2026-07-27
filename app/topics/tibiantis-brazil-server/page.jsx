import TibiantisBrazilServerKeywordPage, { generateMetadata } from './tibiantis-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisBrazilServerKeywordPage />;
}
