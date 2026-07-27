import KasteriaChileServersKeywordPage, { generateMetadata } from './kasteria-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaChileServersKeywordPage />;
}
