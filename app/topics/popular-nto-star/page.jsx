import PopularNtoStarKeywordPage, { generateMetadata } from './popular-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarKeywordPage />;
}
