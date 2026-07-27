import RubinotRealMapKeywordPage, { generateMetadata } from './rubinot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotRealMapKeywordPage />;
}
