import MarolaotChileServerKeywordPage, { generateMetadata } from './marolaot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotChileServerKeywordPage />;
}
