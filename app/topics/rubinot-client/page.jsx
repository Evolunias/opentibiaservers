import RubinotClientKeywordPage, { generateMetadata } from './rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotClientKeywordPage />;
}
