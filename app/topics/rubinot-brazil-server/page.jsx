import RubinotBrazilServerKeywordPage, { generateMetadata } from './rubinot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotBrazilServerKeywordPage />;
}
