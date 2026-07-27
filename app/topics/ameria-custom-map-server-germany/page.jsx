import AmeriaCustomMapServerGermanyKeywordPage, { generateMetadata } from './ameria-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCustomMapServerGermanyKeywordPage />;
}
