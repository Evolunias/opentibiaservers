import KasteriaArgentinaServerKeywordPage, { generateMetadata } from './kasteria-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaArgentinaServerKeywordPage />;
}
