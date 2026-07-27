import AmeriaGermanyServersKeywordPage, { generateMetadata } from './ameria-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaGermanyServersKeywordPage />;
}
