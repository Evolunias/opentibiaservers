import RubinotServerKeywordPage, { generateMetadata } from './rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotServerKeywordPage />;
}
