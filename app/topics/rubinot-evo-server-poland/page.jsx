import RubinotEvoServerPolandKeywordPage, { generateMetadata } from './rubinot-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotEvoServerPolandKeywordPage />;
}
