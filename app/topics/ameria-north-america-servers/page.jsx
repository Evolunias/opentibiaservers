import AmeriaNorthAmericaServersKeywordPage, { generateMetadata } from './ameria-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaNorthAmericaServersKeywordPage />;
}
