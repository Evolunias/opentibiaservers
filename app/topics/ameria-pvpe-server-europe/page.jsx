import AmeriaPvpeServerEuropeKeywordPage, { generateMetadata } from './ameria-pvpe-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPvpeServerEuropeKeywordPage />;
}
