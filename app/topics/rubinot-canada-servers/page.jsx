import RubinotCanadaServersKeywordPage, { generateMetadata } from './rubinot-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotCanadaServersKeywordPage />;
}
