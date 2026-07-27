import TibiamePolandServerKeywordPage, { generateMetadata } from './tibiame-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiamePolandServerKeywordPage />;
}
