import ShadowcoresBrazilServersKeywordPage, { generateMetadata } from './shadowcores-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresBrazilServersKeywordPage />;
}
