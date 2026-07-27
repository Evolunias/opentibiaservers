import AmeriaBaiakServerGermanyKeywordPage, { generateMetadata } from './ameria-baiak-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaBaiakServerGermanyKeywordPage />;
}
