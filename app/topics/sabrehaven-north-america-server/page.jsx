import SabrehavenNorthAmericaServerKeywordPage, { generateMetadata } from './sabrehaven-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenNorthAmericaServerKeywordPage />;
}
