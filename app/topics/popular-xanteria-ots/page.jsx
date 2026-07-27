import PopularXanteriaOtsKeywordPage, { generateMetadata } from './popular-xanteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaOtsKeywordPage />;
}
