import RubinotArgentinaServersKeywordPage, { generateMetadata } from './rubinot-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotArgentinaServersKeywordPage />;
}
