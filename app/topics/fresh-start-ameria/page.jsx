import FreshStartAmeriaKeywordPage, { generateMetadata } from './fresh-start-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaKeywordPage />;
}
