import AmeriaServerKeywordPage, { generateMetadata } from './ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaServerKeywordPage />;
}
