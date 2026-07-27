import MarolaotGermanyServerKeywordPage, { generateMetadata } from './marolaot-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotGermanyServerKeywordPage />;
}
