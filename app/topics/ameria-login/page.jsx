import AmeriaLoginKeywordPage, { generateMetadata } from './ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaLoginKeywordPage />;
}
