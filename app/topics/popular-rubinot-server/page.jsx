import PopularRubinotServerKeywordPage, { generateMetadata } from './popular-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotServerKeywordPage />;
}
