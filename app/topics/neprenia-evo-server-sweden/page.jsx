import NepreniaEvoServerSwedenKeywordPage, { generateMetadata } from './neprenia-evo-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaEvoServerSwedenKeywordPage />;
}
