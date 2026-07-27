import PopularElderaOtsKeywordPage, { generateMetadata } from './popular-eldera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaOtsKeywordPage />;
}
