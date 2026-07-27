import PopularElderaGuideKeywordPage, { generateMetadata } from './popular-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaGuideKeywordPage />;
}
