import BlazeraSouthAmericaServerKeywordPage, { generateMetadata } from './blazera-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSouthAmericaServerKeywordPage />;
}
