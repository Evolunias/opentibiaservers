import EvoleraNorthAmericaServerKeywordPage, { generateMetadata } from './evolera-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraNorthAmericaServerKeywordPage />;
}
