import RubinotChileServerKeywordPage, { generateMetadata } from './rubinot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotChileServerKeywordPage />;
}
