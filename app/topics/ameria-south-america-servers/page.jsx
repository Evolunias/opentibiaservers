import AmeriaSouthAmericaServersKeywordPage, { generateMetadata } from './ameria-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSouthAmericaServersKeywordPage />;
}
