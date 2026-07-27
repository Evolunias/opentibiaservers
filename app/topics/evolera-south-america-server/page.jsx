import EvoleraSouthAmericaServerKeywordPage, { generateMetadata } from './evolera-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSouthAmericaServerKeywordPage />;
}
