import MarolaotMapKeywordPage, { generateMetadata } from './marolaot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotMapKeywordPage />;
}
