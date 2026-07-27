import AmeriaEuropeServersKeywordPage, { generateMetadata } from './ameria-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaEuropeServersKeywordPage />;
}
