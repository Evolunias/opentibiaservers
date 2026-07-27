import KasteriaArgentinaServersKeywordPage, { generateMetadata } from './kasteria-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaArgentinaServersKeywordPage />;
}
