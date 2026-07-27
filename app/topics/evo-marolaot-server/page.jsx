import EvoMarolaotServerKeywordPage, { generateMetadata } from './evo-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMarolaotServerKeywordPage />;
}
