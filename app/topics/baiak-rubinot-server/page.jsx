import BaiakRubinotServerKeywordPage, { generateMetadata } from './baiak-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRubinotServerKeywordPage />;
}
