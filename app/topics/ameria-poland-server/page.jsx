import AmeriaPolandServerKeywordPage, { generateMetadata } from './ameria-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPolandServerKeywordPage />;
}
