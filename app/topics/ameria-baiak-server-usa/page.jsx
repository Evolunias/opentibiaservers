import AmeriaBaiakServerUsaKeywordPage, { generateMetadata } from './ameria-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaBaiakServerUsaKeywordPage />;
}
