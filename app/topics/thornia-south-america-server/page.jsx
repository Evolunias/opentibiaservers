import ThorniaSouthAmericaServerKeywordPage, { generateMetadata } from './thornia-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaSouthAmericaServerKeywordPage />;
}
