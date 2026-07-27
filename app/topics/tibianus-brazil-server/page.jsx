import TibianusBrazilServerKeywordPage, { generateMetadata } from './tibianus-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusBrazilServerKeywordPage />;
}
