import TopAmeriaServerKeywordPage, { generateMetadata } from './top-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaServerKeywordPage />;
}
