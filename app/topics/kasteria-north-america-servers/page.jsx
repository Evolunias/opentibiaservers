import KasteriaNorthAmericaServersKeywordPage, { generateMetadata } from './kasteria-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaNorthAmericaServersKeywordPage />;
}
