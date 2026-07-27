import TibiaraEvoServersUsaKeywordPage, { generateMetadata } from './tibiara-evo-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraEvoServersUsaKeywordPage />;
}
