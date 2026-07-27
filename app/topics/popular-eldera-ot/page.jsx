import PopularElderaOtKeywordPage, { generateMetadata } from './popular-eldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaOtKeywordPage />;
}
