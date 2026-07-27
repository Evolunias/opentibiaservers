import TopAmeriaKeywordPage, { generateMetadata } from './top-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaKeywordPage />;
}
