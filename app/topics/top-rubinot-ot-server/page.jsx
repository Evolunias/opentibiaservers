import TopRubinotOtServerKeywordPage, { generateMetadata } from './top-rubinot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotOtServerKeywordPage />;
}
