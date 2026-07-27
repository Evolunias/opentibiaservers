import TopRubinotServerKeywordPage, { generateMetadata } from './top-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotServerKeywordPage />;
}
