import RubinotEvoServerUkKeywordPage, { generateMetadata } from './rubinot-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotEvoServerUkKeywordPage />;
}
