import RubinotGermanyServerKeywordPage, { generateMetadata } from './rubinot-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotGermanyServerKeywordPage />;
}
