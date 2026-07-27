import PopularRealeraOtKeywordPage, { generateMetadata } from './popular-realera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraOtKeywordPage />;
}
