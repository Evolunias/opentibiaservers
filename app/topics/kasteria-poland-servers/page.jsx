import KasteriaPolandServersKeywordPage, { generateMetadata } from './kasteria-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaPolandServersKeywordPage />;
}
