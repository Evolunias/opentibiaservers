import MarolaotRetroServerSwedenKeywordPage, { generateMetadata } from './marolaot-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotRetroServerSwedenKeywordPage />;
}
