import ShadowcoresBrazilServerKeywordPage, { generateMetadata } from './shadowcores-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresBrazilServerKeywordPage />;
}
