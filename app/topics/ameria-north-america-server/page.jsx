import AmeriaNorthAmericaServerKeywordPage, { generateMetadata } from './ameria-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaNorthAmericaServerKeywordPage />;
}
