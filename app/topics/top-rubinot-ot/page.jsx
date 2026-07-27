import TopRubinotOtKeywordPage, { generateMetadata } from './top-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotOtKeywordPage />;
}
