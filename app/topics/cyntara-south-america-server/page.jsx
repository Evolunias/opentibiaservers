import CyntaraSouthAmericaServerKeywordPage, { generateMetadata } from './cyntara-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraSouthAmericaServerKeywordPage />;
}
