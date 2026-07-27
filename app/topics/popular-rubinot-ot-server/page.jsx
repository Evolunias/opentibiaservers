import PopularRubinotOtServerKeywordPage, { generateMetadata } from './popular-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotOtServerKeywordPage />;
}
