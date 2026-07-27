import PopularNtoStarOtServerKeywordPage, { generateMetadata } from './popular-nto-star-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarOtServerKeywordPage />;
}
