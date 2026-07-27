import AmeriaBaiakServerCanadaKeywordPage, { generateMetadata } from './ameria-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaBaiakServerCanadaKeywordPage />;
}
