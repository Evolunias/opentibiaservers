import PopularAmeriaKeywordPage, { generateMetadata } from './popular-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaKeywordPage />;
}
