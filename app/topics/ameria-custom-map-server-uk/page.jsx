import AmeriaCustomMapServerUkKeywordPage, { generateMetadata } from './ameria-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCustomMapServerUkKeywordPage />;
}
