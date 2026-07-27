import TibiascapeBrazilServersKeywordPage, { generateMetadata } from './tibiascape-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeBrazilServersKeywordPage />;
}
