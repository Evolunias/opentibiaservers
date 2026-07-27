import TopAmeriaOtKeywordPage, { generateMetadata } from './top-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaOtKeywordPage />;
}
