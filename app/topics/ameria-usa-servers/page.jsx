import AmeriaUsaServersKeywordPage, { generateMetadata } from './ameria-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaUsaServersKeywordPage />;
}
