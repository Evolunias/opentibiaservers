import PopularRealestaOtKeywordPage, { generateMetadata } from './popular-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaOtKeywordPage />;
}
