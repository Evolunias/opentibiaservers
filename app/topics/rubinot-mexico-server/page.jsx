import RubinotMexicoServerKeywordPage, { generateMetadata } from './rubinot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotMexicoServerKeywordPage />;
}
