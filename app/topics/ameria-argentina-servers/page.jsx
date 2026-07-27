import AmeriaArgentinaServersKeywordPage, { generateMetadata } from './ameria-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaArgentinaServersKeywordPage />;
}
