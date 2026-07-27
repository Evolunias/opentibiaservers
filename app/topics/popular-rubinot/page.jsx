import PopularRubinotKeywordPage, { generateMetadata } from './popular-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRubinotKeywordPage />;
}
