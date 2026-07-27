import RubinotChileServersKeywordPage, { generateMetadata } from './rubinot-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotChileServersKeywordPage />;
}
