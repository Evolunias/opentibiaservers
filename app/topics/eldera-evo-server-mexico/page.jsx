import ElderaEvoServerMexicoKeywordPage, { generateMetadata } from './eldera-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaEvoServerMexicoKeywordPage />;
}
