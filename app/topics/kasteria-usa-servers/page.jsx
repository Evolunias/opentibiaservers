import KasteriaUsaServersKeywordPage, { generateMetadata } from './kasteria-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaUsaServersKeywordPage />;
}
