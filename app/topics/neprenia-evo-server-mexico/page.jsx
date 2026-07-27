import NepreniaEvoServerMexicoKeywordPage, { generateMetadata } from './neprenia-evo-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaEvoServerMexicoKeywordPage />;
}
