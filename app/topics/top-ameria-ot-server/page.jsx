import TopAmeriaOtServerKeywordPage, { generateMetadata } from './top-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAmeriaOtServerKeywordPage />;
}
