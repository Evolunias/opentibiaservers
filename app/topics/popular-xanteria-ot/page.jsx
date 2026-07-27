import PopularXanteriaOtKeywordPage, { generateMetadata } from './popular-xanteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaOtKeywordPage />;
}
