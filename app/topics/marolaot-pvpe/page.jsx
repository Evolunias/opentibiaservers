import MarolaotPvpeKeywordPage, { generateMetadata } from './marolaot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotPvpeKeywordPage />;
}
