import MarolaotFunServerKeywordPage, { generateMetadata } from './marolaot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotFunServerKeywordPage />;
}
