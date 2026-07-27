import AmeriaEvoServerSwedenKeywordPage, { generateMetadata } from './ameria-evo-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaEvoServerSwedenKeywordPage />;
}
