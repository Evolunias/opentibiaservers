import TopRubinotKeywordPage, { generateMetadata } from './top-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotKeywordPage />;
}
