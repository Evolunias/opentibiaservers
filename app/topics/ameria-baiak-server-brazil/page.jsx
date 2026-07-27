import AmeriaBaiakServerBrazilKeywordPage, { generateMetadata } from './ameria-baiak-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaBaiakServerBrazilKeywordPage />;
}
