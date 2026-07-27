import TibiameSouthAmericaServersKeywordPage, { generateMetadata } from './tibiame-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSouthAmericaServersKeywordPage />;
}
