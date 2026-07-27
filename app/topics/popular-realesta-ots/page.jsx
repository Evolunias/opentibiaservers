import PopularRealestaOtsKeywordPage, { generateMetadata } from './popular-realesta-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaOtsKeywordPage />;
}
