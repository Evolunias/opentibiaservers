import RubinotSwedenServersKeywordPage, { generateMetadata } from './rubinot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotSwedenServersKeywordPage />;
}
