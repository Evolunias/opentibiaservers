import KasteriaUsaServerKeywordPage, { generateMetadata } from './kasteria-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaUsaServerKeywordPage />;
}
