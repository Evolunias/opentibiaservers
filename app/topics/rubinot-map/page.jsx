import RubinotMapKeywordPage, { generateMetadata } from './rubinot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotMapKeywordPage />;
}
