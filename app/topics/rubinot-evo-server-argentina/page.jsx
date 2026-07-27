import RubinotEvoServerArgentinaKeywordPage, { generateMetadata } from './rubinot-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotEvoServerArgentinaKeywordPage />;
}
