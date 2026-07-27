import TibijkaEvoServerArgentinaKeywordPage, { generateMetadata } from './tibijka-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEvoServerArgentinaKeywordPage />;
}
