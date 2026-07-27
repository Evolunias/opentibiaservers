import RubinotPolandServerKeywordPage, { generateMetadata } from './rubinot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPolandServerKeywordPage />;
}
