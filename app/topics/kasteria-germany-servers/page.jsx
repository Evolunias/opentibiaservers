import KasteriaGermanyServersKeywordPage, { generateMetadata } from './kasteria-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaGermanyServersKeywordPage />;
}
