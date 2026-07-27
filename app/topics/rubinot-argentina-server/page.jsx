import RubinotArgentinaServerKeywordPage, { generateMetadata } from './rubinot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotArgentinaServerKeywordPage />;
}
