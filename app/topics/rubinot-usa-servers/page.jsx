import RubinotUsaServersKeywordPage, { generateMetadata } from './rubinot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotUsaServersKeywordPage />;
}
