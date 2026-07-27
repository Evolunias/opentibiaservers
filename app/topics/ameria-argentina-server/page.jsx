import AmeriaArgentinaServerKeywordPage, { generateMetadata } from './ameria-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaArgentinaServerKeywordPage />;
}
