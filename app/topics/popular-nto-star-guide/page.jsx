import PopularNtoStarGuideKeywordPage, { generateMetadata } from './popular-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarGuideKeywordPage />;
}
