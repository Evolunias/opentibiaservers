import KasteriaPolandServerKeywordPage, { generateMetadata } from './kasteria-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPolandServerKeywordPage />;
}
