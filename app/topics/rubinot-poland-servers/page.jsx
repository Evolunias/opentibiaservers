import RubinotPolandServersKeywordPage, { generateMetadata } from './rubinot-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPolandServersKeywordPage />;
}
