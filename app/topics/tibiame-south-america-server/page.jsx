import TibiameSouthAmericaServerKeywordPage, { generateMetadata } from './tibiame-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSouthAmericaServerKeywordPage />;
}
