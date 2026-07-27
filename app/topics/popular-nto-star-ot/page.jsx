import PopularNtoStarOtKeywordPage, { generateMetadata } from './popular-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarOtKeywordPage />;
}
