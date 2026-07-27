import RubinotEvoServerFranceKeywordPage, { generateMetadata } from './rubinot-evo-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotEvoServerFranceKeywordPage />;
}
