import TopRubinotLoginKeywordPage, { generateMetadata } from './top-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotLoginKeywordPage />;
}
