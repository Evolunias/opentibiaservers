import AmeriaBaiakServerUkKeywordPage, { generateMetadata } from './ameria-baiak-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaBaiakServerUkKeywordPage />;
}
