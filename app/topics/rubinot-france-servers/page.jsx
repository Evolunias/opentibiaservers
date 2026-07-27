import RubinotFranceServersKeywordPage, { generateMetadata } from './rubinot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotFranceServersKeywordPage />;
}
