import RubinotFranceServerKeywordPage, { generateMetadata } from './rubinot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotFranceServerKeywordPage />;
}
