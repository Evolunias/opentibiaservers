import KasteriaChileServerKeywordPage, { generateMetadata } from './kasteria-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaChileServerKeywordPage />;
}
