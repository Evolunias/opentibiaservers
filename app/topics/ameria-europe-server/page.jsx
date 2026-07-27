import AmeriaEuropeServerKeywordPage, { generateMetadata } from './ameria-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaEuropeServerKeywordPage />;
}
